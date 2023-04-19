import "./AboutUs.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader.js";

function AboutUs() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 400);
  if (loading) return <Loader />;
  else {
    return (
      <div className="aboutContainer">
        <div className="aboutHeader">
          <FontAwesomeIcon icon={faCircleInfo} /> About Us
        </div>
        <div className="aboutContent">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          distinctio assumenda optio, rerum, ducimus tempore fuga culpa facere
          ex voluptatem fugit, non repellat ut maxime impedit odit! Placeat
          nobis ea officia tempora nulla quam omnis saepe architecto ducimus?
          Perspiciatis nostrum nemo quod provident nisi deserunt eos laudantium
          maxime illum commodi? Quam, dolorem suscipit. Quis, magnam odio
          corrupti eveniet sint assumenda fugit, repellat architecto hic facere
          ullam voluptatum iusto! Tempora magni consectetur quia deserunt sequi,
          odit nesciunt recusandae, neque, perferendis id incidunt quae optio.
          Ut consequuntur qui aliquam quidem eos amet atque, culpa ipsum.
          Perspiciatis numquam dolorum accusantium, odit doloribus tenetur
          deserunt ratione quod aperiam autem aspernatur. Porro, facere
          adipisci. Deserunt voluptatem consequuntur non tenetur repellat dolor
          ullam tempora magnam, quia hic similique labore dolore. Reprehenderit,
          omnis quisquam! Incidunt dignissimos iure voluptates sunt labore hic
          animi quaerat laudantium doloremque ducimus! Illum eveniet minima
          perferendis quaerat quasi necessitatibus quia magni atque pariatur
          reprehenderit veritatis qui, porro praesentium inventore facere. In
          quos sed placeat quia? Rerum debitis asperiores cupiditate fuga
          eveniet, corporis ex inventore excepturi reiciendis numquam veniam,
          voluptas, natus magnam dolorem. Voluptas accusamus fugiat deleniti
          quae adipisci minus facere illo impedit itaque ex modi esse tempora
          commodi dignissimos dolores ea harum, tempore doloribus? Consequatur
          autem itaque porro eius excepturi numquam alias, necessitatibus
          maiores eaque? Nihil eius obcaecati recusandae iste eaque aperiam.
          Pariatur, iste earum vero saepe laborum aliquid ducimus harum aliquam
          odit neque facere voluptate ea, excepturi repellendus perferendis
          culpa voluptates eaque delectus necessitatibus, autem quos
          consequuntur tempora illo debitis! Recusandae praesentium quidem
          eveniet autem commodi, placeat modi libero magnam ipsam minus dicta
          veritatis ad animi optio. Exercitationem tempora vero reprehenderit
          deserunt ducimus voluptate fuga tempore quasi eos ipsum dolores ut,
          expedita fugit! Culpa at illum quos facilis. Excepturi nobis a et
          nostrum, porro non ullam minima odit, error impedit nesciunt velit.
        </div>
      </div>
    );
  }
}

export default AboutUs;
