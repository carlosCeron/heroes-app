import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import SearchScreen from "./SearchScreen";

describe("probando el componente SearchScreen", () => {
  test("debe de mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

  });


  test("debe de mostrarse correctamente con el valor dado", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.card-title').text()).toBe('Batman');

  });

});
