import { useLogout } from "@/hooks/useLogout";
import { ApiError } from "@/lib/types";
import { Toast, Error, NotFound } from "@/components";
import type { ReactNode } from "react";

export const ApiTemplate = ({
  error,
  children,
  isSuccess = false,
}: {
  error?: ApiError;
  children: ReactNode;
  isSuccess?: boolean;
}) => {
  const { signOut } = useLogout();

  const shouldDisplayNotFound = error?.status === 204;
  const shouldDisplayToastError = error?.message && !shouldDisplayNotFound;
  const shouldDisplayToastSuccess = isSuccess;

  if (error?.status === 401 || error?.status === 403) {
    (async () => await signOut())();
    return null;
  }

  // @ts-ignore
  if (error?.status >= 500) {
    return (
      <div className={"container p-4 mr-auto"}>
        <Error />
      </div>
    );
  }

  return (
    <div className={"container p-4 mr-auto"}>
      {shouldDisplayNotFound ? (
        <div className={"flex justify-center"}>
          <NotFound />
        </div>
      ) : (
        children
      )}
      {(shouldDisplayToastError || shouldDisplayToastSuccess) && (
        <Toast
          errorMessage={error?.message}
          type={shouldDisplayToastError ? "error" : "success"}
        />
      )}
    </div>
  );
};
