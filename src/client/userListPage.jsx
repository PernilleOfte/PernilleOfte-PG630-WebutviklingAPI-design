import React from "react";
import { LoadingView } from "./loadingView";
import { ErrorView } from "./errorView";
import { UseLoading } from "./useLoading";
import { Link } from "react-router-dom";

export function UserListPage({ userApi }) {
  const { data: users, error, loading, reload } = UseLoading(
    async () => await userApi.listUsers()
  );

  if (error) {
    return <ErrorView error={error} reload={reload} />;
  }
  if (loading || !users) {
    return <LoadingView />;
  }

  return (
    <>
      {users.map(({ id, firstname, lastname, email }) => (
        <li key={id}>
          <Link to={`/users/${id}/chat`}>
            {firstname}
            {lastname}
          </Link>
          {email}
        </li>
      ))}
    </>
  );
}
