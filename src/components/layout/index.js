import Header from "../general/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}