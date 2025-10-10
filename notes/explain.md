# Explanation (para ma-gets ko)

## useState vs useEffect

useState is for memory while useEffect is for side effects like update or fetching data

---

## logic sa AuthContext.jsx

-   fist is nag assign ng variable para sa createContext
-   second, gumawa ng AuthProvider function to provider user info, handle logout, loading, tsaka setUser para sa pag update
-   third is binalot ko yung App sa main.jsx para mabigyan ng context yung App.jsx ko.
-   last, gumawa ako ng arrow function na useAuth para i-call ko nalang sa tuwing need ko i-reference yung context sa ibang mga components

---
