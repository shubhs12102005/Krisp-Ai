import React from "react";
import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
