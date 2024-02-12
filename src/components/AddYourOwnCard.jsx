const AddYourOwnCard = () => {
  return (
    <div style={{ background: "var(--lighter-blue)", padding: "100px" }}>
      <div
        className="container mx-auto border bg-white"
        style={{ padding: "40px", borderRadius: "8px" }}
      >
        <div className="d-flex gap-4 align-items-center pb-4">
          <img src="/Add.svg" height="40px" width="40px" />
          <span className="fs-4 fw-bolder">Add your own</span>
        </div>
        <p className="pb-4">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button
          className="px-4 py-2 bg-white "
          style={{
            minWidth: "120px",
            border: "1px solid var(--light-purple)",
            borderRadius: "8px",
          }}
        >
          Add New
        </button>
      </div>
    </div>
  );
};

export default AddYourOwnCard;
