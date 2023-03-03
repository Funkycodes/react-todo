export default function Page({ pageTitle, pageIcon, children }) {
  return (
    <>
      <h2
        style={{
          marginTop: 0,
          display: "flex",
          alignItems: "center",
          gap: ".25rem",
        }}
      >
        {pageIcon} {pageTitle}
      </h2>
      {children}
    </>
  );
}
