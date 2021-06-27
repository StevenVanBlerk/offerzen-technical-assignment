import {
  Container,
  Typography,
  MinimalButton,
  MinimalInput,
  HContainer,
} from "components";
import { paddings } from "config";
import { colors } from "config";
import Image from "next/image";
export const SearchBar = ({ value, onChange = () => {} }) => {
  return (
    <>
      <HContainer
        border={`2px solid ${colors.MYSTIC}`}
        borderRadius="5px"
        maxWidth="225px"
        justifyContent="space-between"
        padding={` ${paddings.SMALL} ${paddings.DEFAULT}`}
      >
        <MinimalInput
          placeholder="Search"
          value={value}
          onChange={onChange}
          fontSize="15px"
          width="100%"
        />
        <Image
          src="/icons/search.svg"
          alt="search-icon"
          height="20px"
          width="20px"
        />
      </HContainer>
    </>
  );
};
