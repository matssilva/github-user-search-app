import React, { useEffect, useState } from "react";
import { Container, SearchButton, SearchInput } from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { IUser } from "../../types/IUser";

interface Props {
  theme: string;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const Search = ({ theme, setUser }: Props): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    setError("");
  };

  const fetchUser = async (term: string): Promise<IUser> => {
    const response: Response = await fetch(
      `https://api.github.com/users/${term}`
    );
    if (response.status === 404) {
      setError("No results");
      return;
    }
    const data: IUser = await response.json();
    return data;
  };

  useEffect(() => {
    (async () => {
      const user: IUser = await fetchUser("octocat");
      setUser(user);
    })();
  }, [setUser]);

  const onButtonClick = async () => {
    if (!term) {
      setError("No results");
      return;
    }
    const user: IUser = await fetchUser(term);
    if (user) setUser(user);
  };

  return (
    <Container themeSelected={theme}>
      <SearchIcon />
      <SearchInput
        type="text"
        value={term}
        placeholder="Search GitHub username…"
        onChange={onChangeInput}
      />
      {error && <label className="error">{error}</label>}
      <SearchButton onClick={onButtonClick}>Search</SearchButton>
    </Container>
  );
};

export default Search;
