import styled from 'styled-components'
import { ReactComponent as Undov } from '../../assets/icons/undov.svg'
import {ReactComponent as HalfCircle} from '../../assets/icons/half_circle.svg'


export const Container = styled.div`
padding: 0 165px;
box-sizing: border-box;
`

export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
flex-flow: ${({isBilimUlashing}) => isBilimUlashing && 'row-reverse'};
`

export const UndovIcon = styled(Undov)`
transform: scale(1);
position: absolute;
right: ${({isBilimUlashing}) => isBilimUlashing ? '-160px' : '-150px'};
/* right: -300px; */
bottom: -30px;
`

export const HalfCircleIcon = styled(HalfCircle)`
position: absolute;
bottom: ${({isBilimUlashing}) => isBilimUlashing ? '20px' : '-50px'};
left: ${({isBilimUlashing}) => !isBilimUlashing && '-90px'};
right: ${({isBilimUlashing}) => isBilimUlashing && '-130px'};
path{
    fill: ${({isBilimUlashing}) => isBilimUlashing ? '#FFD4CC' : '#CCD0D9'};
}
transform: scale(1.3);

`
