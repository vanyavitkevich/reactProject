import React, {Component} from 'react';
import './App.scss';
import Modal from './components/Modal';
import Header from './components/Header';
import headerProps from './headerProps';
import HeadText from './components/HeadText';
import MainText from './components/MainText';
import MainTextNum from './components/MainTextNum';
import CardPortfolio from './components/CardPortfolio';
import CardReview from './components/CardReview';
import FormBot from './components/FormBot';
import Logo from './components/Logo';

const {text, form, content, contacts, bottomForm, footer} = headerProps;
const {heading, intro} = form;
const {slides} = content[3];
const {slides__sec} = content[4];
const {inputsBot} = bottomForm;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      properties: slides,
      property: slides[0],
      properties__sec: slides__sec,
      property__sec: slides__sec[0]
    };
  }

  modalOpenHandler = () => this.setState({
    modalOpen: !this.state.modalOpen
  })

  nextProp = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: slides[newIndex]
    })
  }
  prevProp = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: slides[newIndex]
    })
  }
  setProp = (ind) => {
    this.setState({
      property: slides[ind]
    })
  }

  nextPropSec = () => {
    const newIndex = this.state.property__sec.index + 1;
    this.setState({
      property__sec: slides[newIndex]
    })
  }
  prevPropSec = () => {
    const newIndex = this.state.property__sec.index - 1;
    this.setState({
      property__sec: slides[newIndex]
    })
  }

  render(){
    const {property} = this.state
    const {property__sec} = this.state
    const {properties__sec} = this.state
    const portfolio = content[3].slides
    
    return (
      <React.Fragment>
        <Header 
          idName = "header"
          classWrapper = "header" 
          content = {content}
          onClick = {this.modalOpenHandler}
          {...text}
          >
        </Header>
        {this.state.modalOpen && 
            <Modal {...form.inputs} 
                   clickHandler={this.modalOpenHandler}
                   onClick={this.modalOpenHandler}
                   classWrapper = "header"
                   heading={heading}
                   intro={intro}
                   inputs={form.inputs}
            />
        }
        <section className = "about">
          <HeadText classWrapper = "about" colorHead = "#1f1230" title = {content[0].title}>
          
          </HeadText>
          <MainText classWrapper = "about" colorMain = "#010101" articles = {content[0].articles}>

          </MainText>
        </section>
        <section className = "advantages">
          <HeadText classWrapper = "advantages" colorHead = "#fdfdfd" title = {content[1].title}>
            
          </HeadText>
          <MainTextNum classWrapper = "advantages" colorLi = "#989699" colorMain = "#fdfdfd" articles = {content[1].articles}>

          </MainTextNum>
        </section>
        <section className = "procedure">
          <HeadText classWrapper = "procedure" colorHead = "#1a1513" title = {content[2].title}>
            
          </HeadText>
          <MainTextNum classWrapper = "procedure" colorLi = "#9f98aa" colorMain = "#1d141e" articles = {content[2].articles}>

          </MainTextNum>
        </section>
        <section className = "portfolio">
          <h2>{content[3].item}</h2>
          <div className = "portfolio-wrapper">
            <button className = "portfolio__Btn portfolio__nextBtn" 
                    onClick = {() => this.prevProp()}
                    disabled = {property.index === 0}>
            </button>
            <CardPortfolio properties = {property} classWrapper = "portfolio__item"/>
            <button className = "portfolio__Btn portfolio__prevBtn" 
                    onClick = {() => this.nextProp()}
                    disabled = {property.index === slides.length - 1}>
            </button>
          </div>
          <ul className = "portfolio__Btn_bot__wrapper">
            {portfolio.map((el, i) => 
              <li className = "portfolio__li">
                <button onClick = {() => {
                          this.setProp(i)
                        }}
                        className = {(property.index == i) ? "portfolio__li__btn__act portfolio__li__btn":"portfolio__li__btn"}>
                </button>
              </li>)
            }
          </ul>
        </section>
        <section className = "review">
          <h2>{content[4].title}</h2>
          <div className = "review-wrapper">
            <button className = "review__Btn review__prevBtn" 
                    onClick = {() => this.prevPropSec()}
                    disabled = {property__sec.index === 0}>
            </button>
            <div className = {`cards-slider active-slide-${property__sec.index}`}>
              <div className = "cards-slider-wrapper"
                   style = {{ transform: `translateX(-${property__sec.index * (100 / properties__sec.length)}%)` }
              }>  
              {
                properties__sec.map(property__sec => 
                  <CardReview properties = {property__sec} classWrapper = "review__item"/>
                )
              }
              </div>
            </div>
            <button className = "review__Btn review__nextBtn" 
                    onClick = {() => this.nextPropSec()}
                    disabled = {property__sec.index === slides__sec.length - 1}>
            </button>
          </div>
        </section>
        <section className = "cost">
          <HeadText classWrapper = "procedure" colorHead = "#1a1513" title = {content[5].title}>
            
          </HeadText>
          <MainText classWrapper = "cost" colorMain = "#010101" articles = {content[5].articles}>

          </MainText>
          <button className = "cost__button" onClick = {this.modalOpenHandler}>
            {text.order}
          </button>
        </section>
        <section className = "map">
          <div id = "map_main" 
              //  style="overflow:hidden;width: 33%;"
              >ЯНДЕКС КАРТА
            {/* <iframe width="33%" 
                    height="400" 
                    src="https://maps.google.com/maps?width=800&amp;height=440&amp;hl=en&amp;q=Newham%20University%20Hospital+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe> */}
          </div>
          <div className = "map__thanks">
            <h2>
              спасибо!
            </h2>
            <p>
              Мы перезвоним Вам в течение 30 минут
            </p>
          </div>
          <div className = "map__form__wrapper">
              <h2>
                {bottomForm.heading}
              </h2>
              <p>
                {bottomForm.intro}
              </p>
              <FormBot classWrapper = "map__form__bottomForm" properties = {inputsBot}/>
          </div>
        </section>
        <footer className = "footer">
            <div className = "footer__left">
              <Logo {...footer}></Logo>
              <p>{footer.law}</p>
            </div>
            <div className = "footer__center">
                <a href = "#header" className = "footer__center__btn">
                  {footer.buttonText}
                </a>
            </div>
            <div className = "footer__right">
              <p>{footer.phone}</p>
            </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;