import Nav from "./Nav";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";
import Cards4 from "./Cards4";
import Cards5 from "./Cards5";
import { useState } from "react";

function Home() {
  const [url, setUrl] = useState("");
  const [flag, setFlag] = useState(false);
  console.log(flag, url);

  return (
    <>
      <Nav />
      <div className="flex flex-row gap-2 ">
        <Cards />
        <Cards2 />
        <Cards3 />
        <Cards4 />
      </div>
      <div className="grid grid-col-4">
        <Cards5 />
        <div className="col-start-2 col-end-4">
          {flag ? (
            <div className="px-10% py-5% m-12">
              <div Class="bg-white">Feed</div>
              <img
                id="browser_video"
                class="object-none "
                alt="video"
                src={url + "video"}
              ></img>
            </div>
          ) : (
            <>
              <input value={url} onInput={(e) => setUrl(e.target.value)} />
              <div onClick={(e) => setFlag(true)}>SAT Feed</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
