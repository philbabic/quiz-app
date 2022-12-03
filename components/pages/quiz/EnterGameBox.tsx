import { SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import { useTranslations } from "../../../hooks";
import AppText from "../../common/AppText";
import QuizButton from "./QuizButton";
import QuizBox from "./QuizBox";
import { useAlert } from "../../../providers";
import { deleteCookie } from "cookies-next";
import { COOKIE_KEY } from "../../../constants";
import { useRouter } from "next/router";

interface Props {
  handleExit: () => void;
  handleStart: () => void;
}
const EnterGameBox = (props: Props) => {
  const { handleExit, handleStart } = props;
  const t = useTranslations();

  return (
    <QuizBox spacing="4">
      <AppText>{t.quiz.welcome.message}</AppText>
      <SimpleGrid columns={2} spacing="4">
        <QuizButton variant="outline" onClick={handleExit}>
          {t.quiz.welcome.exit}
        </QuizButton>
        <QuizButton onClick={handleStart}>{t.quiz.welcome.enter}</QuizButton>
      </SimpleGrid>
    </QuizBox>
  );
};

export default EnterGameBox;
