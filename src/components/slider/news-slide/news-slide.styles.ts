import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

const NewsSlide = styled.div`
    max-width: 61.5rem;
    width: 100%;
    padding: 2rem;
    border-radius: 6px;
    background-color: #141615;
    transition: background-color 0.25s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkgrey};
    }

    @media ${({ theme }) => theme.media.small} {
        max-width: 40rem;
        min-height: 63rem;
    }
`

const NewsContent = styled(FlexContainer)`
    @media ${({ theme }) => theme.media.small} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const NewsTitle = styled.h3`
    margin-bottom: 1.6rem;
    font-size: 1.9rem;
    font-weight: 600;
    text-transform: uppercase;
`

const GameName = styled.span`
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
`

const Date = styled.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.grey};
`

const NewsDescription = styled.p`
    max-width: 25.6rem;
    font-size: 12px;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.grey};

    @media ${({ theme }) => theme.media.small} {
        max-width: 100%;
    }
`

const NewsImage = styled.img``

export const S = {
    NewsSlide,
    NewsContent,
    NewsTitle,
    GameName,
    Date,
    NewsDescription,
    NewsImage,
}
