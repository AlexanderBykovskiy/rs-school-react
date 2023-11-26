import React from "react";

export interface typeProps {
  children: React.ReactNode;
}

export interface typeState {
  error: null | Error;
  errorInfo: null | React.ErrorInfo;
}
