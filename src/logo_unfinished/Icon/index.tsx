import { FC, useEffect } from "react";
import Lax from "lax.js";
import styled from "styled-components";

const Angle = styled.div`
  display: inline-block;
  width: 84px;
  height: 138px;
  position: relative;

  .top,
  .bottom {
    width: 25px;
    position: absolute;
    background-color: #fff;
  }

  .top {
    height: 100px;
    left: 28px;
    top: -8px;
  }

  .bottom {
    height: 80px;
    border-radius: 0 0 20px 20px;
    top: 65px;
  }
`;

const LessThan = styled(Angle)`
  .top {
    border-radius: 20px 20px 0 20px;
    transform: rotate(45deg) !important;
  }

  .bottom {
    left: 38px;
    transform: rotate(-45deg) !important;
  }
`;

const GreaterThan = styled(Angle)`
  .top {
    border-radius: 20px 20px 20px 0;
    transform: rotate(-45deg) !important;
  }

  .bottom {
    left: 18px;
    transform: rotate(45deg) !important;
  }
`;

const Slash = styled.div`
  display: inline-block;
  width: 88px;
  height: 138px;
  position: relative;

  .slash {
    width: 25px;
    height: 140px;
    position: absolute;
    background-color: #fff;
    border-radius: 20px;
    transform: rotate(22deg) !important;
    right: 30px;
  }
`;

const createBoxShadow = (cssFn: (value: number) => string) => ({
  "box-shadow": [
    ["elCenterY", "elOutY-200"],
    [0, 50],
    {
      easing: "easeInOutQuint",
      cssFn,
    },
  ],
});

const Icon: FC<{ lax: typeof Lax }> = ({ lax }) => {
  useEffect(() => {
    lax?.addElements(".lessthan, .greaterthan, .slashwrap", {
      scrollY: {
        translateY: [
          ["elCenterY", "elCenterY+100", "elOutY"],
          [0, 0, "-screenHeight"],
          {
            easing: "easeInOutQuart",
          },
        ],
        translateX: [
          ["elCenterY", "elOutY"],
          [0, "-screenWidth"],
          {
            easing: "easeInOutQuart",
          },
        ],
      },
    });

    lax?.addElements(".lessthan .top", {
      scrollY: createBoxShadow(
        (val: number) => `${val / 4}px ${val}px ${val}px rgba(0, 0, 0, 0.5)`
      ),
    });

    lax?.addElements(".greaterthan .top", {
      scrollY: createBoxShadow(
        (val: number) => `${-val}px ${val / 4}px ${val}px rgba(0, 0, 0, 0.5)`
      ),
    });

    lax?.addElements(".lessthan .bottom", {
      scrollY: createBoxShadow(
        (val: number) => `${-val}px ${val / 4}px ${val}px rgba(0, 0, 0, 0.5)`
      ),
    });

    lax?.addElements(".greaterthan .bottom", {
      scrollY: createBoxShadow(
        (val: number) => `${-val / 4}px ${val}px ${val}px rgba(0, 0, 0, 0.5)`
      ),
    });

    lax?.addElements(".slashwrap .slash", {
      scrollY: createBoxShadow(
        (val: number) =>
          `${-val / 2}px ${val / 2}px ${val}px rgba(0, 0, 0, 0.5)`
      ),
    });
  }, [lax]);

  return (
    <>
      <LessThan className="lessthan">
        <div className="top" />
        <div className="bottom" />
      </LessThan>
      <Slash className="slashwrap">
        <div className="slash" />
      </Slash>
      <GreaterThan className="greaterthan">
        <div className="top" />
        <div className="bottom" />
      </GreaterThan>
    </>
  );
};

export default Icon;
