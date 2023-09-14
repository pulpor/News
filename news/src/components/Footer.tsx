interface FooterProps {
  handleButtonClick: () => void;
}

export function Footer({ handleButtonClick }: FooterProps ) {
  return (
    <div className="buttonEnd">
      <button className="moreNews" onClick={ handleButtonClick }>
        MAIS NOTÍCIAS
      </button>
    </div>
  )
}
