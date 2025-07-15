import styled from 'styled-components'
import footerImg from 'assets/img/footer.webp'
import footerImg2x from 'assets/img/footer-2x.webp'

const Footer = styled.footer`
    padding-top: 15rem;
    padding-bottom: 1rem;
    text-align: center;
    background: url(${footerImg}) no-repeat right top;

    nav > ul {
        justify-content: center;
    }

    @media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
        background: url(${footerImg2x}) no-repeat right top;
    }
`

const FooterInfo = styled.p`
    margin-top: 5rem;
    margin-bottom: 3.8rem;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.6rem;
`

const FooterImg = styled.img`
    margin-bottom: 2rem;
`

const FooterYear = styled.div`
    margin-bottom: 1.3rem;
`

const FooterCopy = styled.small`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.grey};

    & > a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const S = {
	Footer,
	FooterInfo,
	FooterImg,
	FooterYear,
	FooterCopy,
}
