import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { queryByMaxWidth } from '../../../../utils';
import { useMediaQuery } from 'react-responsive';
import ImageWithRelumeMobile from '../../../../assets/image/img-with-relume-mobile.png';
import ImageWithRelume1 from '../../../../assets/image/img-with-relume-1.png';
import ImageWithRelume2 from '../../../../assets/image/img-with-relume-2.png';
import ImageWithRelume3 from '../../../../assets/image/img-with-relume-3.png';
import ImageWithoutRelumeMobile from '../../../../assets/image/img-without-relume-mobile.png';
import ImageWithoutRelume from '../../../../assets/image/img-without-relume.png';
import { EViewport } from '../../../../interface';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

type TPropsCmpElContentTab = {
  isWithRelume: boolean;
  refImageWillBeLoadedEager: React.RefObject<HTMLImageElement>;
};

const DivWrapperImage = tw.div`
relative block min-h-max opacity-100 [transition:opacity_500ms_ease_0s] max-desktop:w-full max-desktop:max-w-full
`;

const ImgContent = tw.img`
relative mx-auto max-w-[1000px] max-desktop:mx-0 max-desktop:w-full max-desktop:min-w-full max-desktop:max-w-full max-tablet:block
`;

const ImgOverlay = tw.img`
absolute inset-[0%] z-[1] mx-auto block max-w-[1000px] [transform-style:preserve-3d] [transform:translate3d(0%,0px,0px)_scale3d(1,1,1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,0deg)] max-desktop:mx-0 max-desktop:w-full max-desktop:min-w-full max-desktop:max-w-full max-tablet:hidden
`;

const CmpElContentTab: FC<TPropsCmpElContentTab> = ({
  isWithRelume,
  refImageWillBeLoadedEager,
}) => {
  const isMobile = useMediaQuery(queryByMaxWidth(EViewport.TABLET));
  return (
    <SwitchTransition>
      <CSSTransition
        key={isWithRelume ? 'with relume' : 'without relume'}
        addEndListener={(node, done) =>
          node.addEventListener('transitionend', done, false)
        }
        classNames="transition-fade"
      >
        <DivWrapperImage>
          {isMobile ? (
            <ImgContent
              ref={refImageWillBeLoadedEager}
              src={
                isWithRelume ? ImageWithRelumeMobile : ImageWithoutRelumeMobile
              }
              loading={isWithRelume ? 'lazy' : 'eager'}
              alt={isWithRelume ? 'with relume' : 'without relume'}
            />
          ) : isWithRelume ? (
            <>
              <ImgContent
                src={ImageWithRelume1}
                alt="with relume 1"
                loading="lazy"
              />
              <ImgOverlay
                src={ImageWithRelume2}
                alt="with relume 2"
                loading="lazy"
              />
              <ImgOverlay
                src={ImageWithRelume3}
                alt="with relume 3"
                loading="lazy"
              />
            </>
          ) : (
            <ImgContent
              ref={refImageWillBeLoadedEager}
              src={ImageWithoutRelume}
              alt="without relume"
              loading="eager"
            />
          )}
        </DivWrapperImage>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default CmpElContentTab;