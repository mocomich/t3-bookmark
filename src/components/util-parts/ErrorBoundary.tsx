import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error }: FallbackProps) => {
  const message = error.message;

  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{message}</pre>
    </div>
  );
};
