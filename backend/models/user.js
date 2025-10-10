const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: function () {
                return this.role !== "company";
            },
            trim: true,
        },
        surname: {
            type: String,
            required: function () {
                return this.role !== "company";
            },
            trim: true,
        },
        companyName: {
            type: String,
            required: function () {
                return this.role === "company";
            },
            trim: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        privacyAgreement: {
            type: Boolean,
            required: true,
            default: false,
        },
        verificationCode: String,
        verificationCodeExpires: Date,
        role: {
            type: String,
            enum: ["superAdmin", "admin", "company", "user"],
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (
        this.isModified("firstName") ||
        this.isModified("surname") ||
        this.isModified("companyName")
    ) {
        if (this.role === "company") {
            this.name = this.companyName || "";
        } else {
            this.name = `${this.firstName || ""} ${this.surname || ""}`.trim();
        }
    }

    if (!this.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
