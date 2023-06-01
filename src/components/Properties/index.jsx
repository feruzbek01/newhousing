import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./style";
import { HouseCard } from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";

export const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [list, setList] = useState();
  const { search } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/v1/houses/list${search}`, {})
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        setList(res?.data);
      });

    // eslint-disable-next-line
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <Container>
      <div className="title center">Properties</div>
      <div className="description center">
        The Houses that You Want and dream!!!
      </div>

      <Wrapper>
        {list?.map((item) => {
          return (
            <HouseCard
              onClick={() => onSelect(item.id)}
              key={item.id}
              info={item}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};
