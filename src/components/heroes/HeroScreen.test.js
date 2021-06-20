import HeroScreen from "./HeroScreen";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
describe("Pruebas en HeroScreen", () => {
  const history = {
    goBack: jest.fn(),
  };

  test("debe retornar string vacio si no se cuenta con un hero.", () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe"]}>
        <HeroScreen history={history} />
      </MemoryRouter>
    );
  

    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test('debe de mostrar un heroe si el parametro existe', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe/marvel-spider"]}>
        <Route path='/heroe/:heroId' component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('h3').text()).toBe('Spider Man');
    
  });

  test('debe de regresar a la pantalla anterior', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe/marvel-spider"]}>
        <Route path='/heroe/:heroId' component={ () => <HeroScreen history={history}  />} />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect(history.goBack).toHaveBeenCalledTimes(1);


  });

});
