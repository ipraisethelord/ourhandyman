import React, { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { Service } from "../pages/service";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => {
  const { pathname } = useLocation();
  const nodeRef = useRef(null); // Add this line to fix findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition2 which is inside StrictMode. Instead, add a ref directly to the element you want to reference.

  return (
    <TransitionGroup>
      <CSSTransition
        nodeRef={nodeRef} // Pass the ref to the CSSTransition component
        key={pathname}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
});

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
 
    </div>
  );
}

export default AppRoutes;
