import IFoo from "./Foo.d";
import React from "react";
import './Button.css'

const Foo = ({ ctx = "foo", ctxId, label, variant }: IFoo): JSX.Element => (
  <button data-ctx={ctx} data-ctx-id={ctxId} style={{backgroundColor: `$(variant)`}}>
    {label}
  </button>
  //zmiana z div na button
);

export default Foo;
