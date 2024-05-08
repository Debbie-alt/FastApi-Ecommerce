import ThemeProvider from "./ThemeProvider" 

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <ThemeProvider
         attribute="class"
         defaultTheme="light"
         enableSystem
         enablTransitionOnChange
        
        >{children}</ThemeProvider>
      </div>
    </div>
  )
}