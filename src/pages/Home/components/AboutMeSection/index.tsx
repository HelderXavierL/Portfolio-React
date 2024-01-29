import * as S from "../../style";
import H2 from "../../../../components/H2";
import Circle from "../../../../assets/svgComponents/Circle";

interface AboutMeContract {
    isMobile: boolean;
}

const AboutMeSection = ({ isMobile }: AboutMeContract) => {
    return (
        <S.Section id="aboutMe">
            <div className="centralizer">
                <H2>Sobre mim</H2>
                <S.AboutMeContainer>
                    <div>
                        <p>
                            Me chamo Helder, sou um desenvolvedor, com muitas habilidades e interesse em aprender mais sobre como criar e manter sistemas eficientes e funcionais. Com minha paixão pela tecnologia e solução de problemas, decidi me especializar em programação e desde então venho estudando e me aperfeiçoando em diferentes linguagens de programação e ferramentas.
                        </p>
                        <br />
                        <p>
                            Atualmente estou cursando análise e desenvolvimento
                            de sistemas (ADS) e focando no desenvolvimento
                            FullStack.
                        </p>
                    </div>
                    {!isMobile && (
                        <div className="svgContainer">
                            <Circle />
                        </div>
                    )}
                </S.AboutMeContainer>
            </div>
        </S.Section>
    );
};

export default AboutMeSection;