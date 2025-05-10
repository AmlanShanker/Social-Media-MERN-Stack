import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info6.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Deadpool & Wolverine</Typography>
        <Typography color={medium}>marvel.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Marvel Studios presents their most significant mistake to date –
        Deadpool & Wolverine. A listless Wade Wilson toils away in civilian
        life. His days as the morally flexible mercenary, Deadpool, behind him.
        When his homeworld faces an existential threat, Wade must reluctantly
        suit-up again with an even more reluctantlier… reluctanter?
        Reluctantest? He must convince a reluctant Wolverine to – Fuck. Synopses
        are so fucking stupid.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
