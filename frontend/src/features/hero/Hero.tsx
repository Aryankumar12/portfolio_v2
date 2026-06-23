import Button from "../../components/Button";
function Hero() {
  function handleResumeClick(): void {
    alert("hellow i clieck");
  }
  function handleContactClick(): void {
    alert("haha");
  }

 
  const heroData = {
    name: "Aryan Kumar",
    role: "Software Engineer | Full Stack Devloper", 
    introduction: "I am 2026 grad currently will work in Epam System as junior software Engineer"
  }
  return (
    <>
        <div>

        <h1>{heroData.name}</h1>
        <p>{heroData.role}</p>
        <p>{heroData.introduction}</p>
        </div>

      <Button text="Download Resume" onClick={handleResumeClick} />
      <Button text="Contact Me" onClick={handleContactClick} />

    </>
  );
}

export default Hero;
