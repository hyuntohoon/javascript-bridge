const MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
  INPUT_LENGTH: "다리의 길이를 입력해주세요.",
  INPUT_MOVESELECT: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  GAME_RESTART: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  FINAL_RESULT: (result, attempts) =>
    `최종 게임 결과 \n게임 성공 여부: ${result}\n총 시도한 횟수 : ${attempts}`,
});

module.exports = { MESSAGE };
