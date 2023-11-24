const VerificatrionEmail = ({ name, email, activationToken }) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>activationToken:</h2>
    <p>{activationToken}</p>
  </div>
);

export default VerificatrionEmail;
