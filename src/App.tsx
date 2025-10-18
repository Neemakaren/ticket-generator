import { useState } from 'react'
import './App.css'
import patternSquigglyLineTop from "./assets/images/pattern-squiggly-line-top.svg";
import patternSquigglyLineBottomDesktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import Header from './components/Header';
import Title from './components/Title';
import Form from './components/Form';
import Ticket from './components/Ticket';


interface FormEntry {
  avatar: string;
  fullName: string;
  email: string;
  github: string;
}

function App() {
    const [formEntry, setFormEntry] = useState<FormEntry | null>(null);

    const handleFormSubmit = (data: FormEntry) => {
      setFormEntry(data)
    }
  
  return (
    <main className="flex flex-col h-[53em] items-center xl:bg-[url(assets/images/pattern-lines.svg),_url(assets/images/background-desktop.png)] md:bg-[url(assets/images/pattern-lines.svg),_url(assets/images/background-tablet.png)] bg-[url(assets/images/pattern-lines.svg),_url(assets/images/background-mobile.png)] bg-cover min-h-screen min-w-full">
      <img
        src={patternSquigglyLineTop}
        alt="Squiggly line"
        className="absolute right-0 inline-block xl:w-80 xl:h-60 md:w-60 md:h-40 h-20 w-30 top-0"
      />
      {/* <main className="maxx max-w-[850px] my-4 mx-auto p-4 "> */}
      <Header />
      <section className="flex items-center flex-col text-center">
        {formEntry ? (
          <Title
            title={
              <>
                Congrats,{" "}
                <span className="gradient-text">{formEntry.fullName}</span>!
                Your ticket is ready.
              </>
            }
            paragraph={
              <>
                We've emailed your ticket to{" "}
                <span className="text-orange-500 w-3xs"> {formEntry.email} </span> and
                will send updates in the run up to the event.
              </>
            }
          />
        ) : (
          <Title
            title="Your Journey to Coding Conf 2025 Starts Here!"
            paragraph="Secure your spot at next year's biggest coding conference."
          />
        )}
      </section>

      {!formEntry && <Form onSubmit={handleFormSubmit} />}
      {formEntry && (
        <Ticket
          fullName={formEntry.fullName}
          avatar={formEntry.avatar}
          github={formEntry.github}
        />
      )}
      {/* </main> */}

      <img
        src={patternSquigglyLineBottomDesktop}
        alt="Curl pattern"
        className="absolute inline-block bottom-0 left-0 sm:w-120 w-96 lg:w-200 z-0 -mb-24"
      />
    </main>
  );
}

export default App
