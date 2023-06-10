type propTypes = {
  children: React.ReactNode
}

function BuilderLayout({ children }: propTypes) {
  return (
    <>
      {children}
    </>
  )
}

export default BuilderLayout