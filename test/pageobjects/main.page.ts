import { ChainablePromiseElement } from 'webdriverio';

// import Page from './page.js';

class MainPage {

    public get logoName () {
        return $('(//a[contains(.,"DecemberLabs")])[position() = 1]');
    }

    public get mainTitle () {
        return $('//h2[contains(.,"Rocket-Fuel")]');
    }

    public get hamburguerMenu () {
        return $('//a[contains(.,"Open Menu")]');
    }

    public get austinLink () {
        return $('//a[contains(.,"Austin")]');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    // public async login (username: string, password: string) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }
}

export default new MainPage();
