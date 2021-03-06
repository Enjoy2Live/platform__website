import React from "react";
import Link from "next/link";

import style from "./Organization.module.css";

import Button from "../../../common/Button";

export default function Organization() {
  return (
    <div className={style.Organization}>
      <h1>
        Our Organization
        <span style={{ fontSize: "1rem" }}> (for everyone)</span>
      </h1>
      Dev Launchers is a nonprofit intent on empowering people from diverse
      communities
      <div className={style.CtaSection}>
        <h2 className={style.CtaSection_Title}>
          We love what we do. You should too!
        </h2>
        <div className={style.CtaSection_Content}>
          <div className={style.CtaSection_Description}>
            Your time is valuable, do something you love. Dev Launchers is built
            for people just like you, take a look around and join us!
          </div>
          <div className={style.CtaSection_ButtonArea}>
            <Link href={"/members"}>
              <Button className={style.CtaSection_Button} fontSize="2rem">
                Join Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.CtaSection}>
        <h2 className={style.CtaSection_Title}>We believe in Open Source</h2>
        <div className={style.CtaSection_Content}>
          <div className={style.CtaSection_Description}>
            Everything, from our platform to our curriculum to the projects we
            develop, is released to the open source community. We rely on
            contributors to grow our platform and continue serving our students!
          </div>
          <div className={style.CtaSection_ButtonArea}>
            <Button
              className={style.CtaSection_Button}
              fontSize="2rem"
              href="https://github.com/dev-launchers"
            >
              Find us on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
