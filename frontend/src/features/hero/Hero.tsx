import Button from "../../components/Button";
function Hero() {
  function handleResumeClick(): void {
    alert("hellow i clieck");
  }
  function handleContactClick(): void {
    alert("haha");
  }

  const name = "Aryan Kumar";
  const role = "Software Engineer | Full Stack Devloper";
  const introduction = "I am 2026 grad currently will work in Epam System as junior software Engineer";
  return (
    <>
        <div>

        <h1>{name}</h1>
        <p>{role}</p>
        <p>{introduction}</p>
        </div>

      <Button text="Download Resume" onClick={handleResumeClick} />
      <Button text="Contact Me" onClick={handleContactClick} />
    </>
  );
}

export default Hero;
