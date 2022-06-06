import { ClockStyled, ContentStyled, NumberStyled, StyledH1, TextStyled } from "../styles/StyledComponents";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <>
            <ContentStyled>
            <StyledH1>WE'RE LAUNCHING SOON</StyledH1>
                <ClockStyled>
                    <div>
                        <NumberStyled>
                            {timerDays}
                        </NumberStyled>
                        <TextStyled>DAYS</TextStyled>
                    </div>
                    <div>
                        <NumberStyled>
                            {timerHours}
                        </NumberStyled>
                        <TextStyled>HOURS</TextStyled>
                    </div>
                    <div>
                        <NumberStyled>
                            {timerMinutes}
                        </NumberStyled>
                        <TextStyled>MINUTES</TextStyled>
                    </div>
                    <div>
                        <NumberStyled>
                            {timerSeconds}
                        </NumberStyled>
                        <TextStyled>SECONDS</TextStyled>
                    </div>
                </ClockStyled>
            </ContentStyled>
        </>
    );
};

Clock.defaultProps = {
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0,
    timerSeconds: 0,
};

export default Clock;