import { ChainablePromiseElement } from 'webdriverio';

class AustinPage {

    public get austinTitle () {
        return $('//h1[contains(.,"Austin Web and App Developers")]');
    }

    public get scheduleButton () {
        return $('(//a[contains(.,"Schedule free consultation")])[position() = 1]');
    }

    public get schedulePopup () {
        return $('[class="dl-modal calendar-modal open"]');
    }

    public get closeModalButton () {
        return $('(//*[@class="btn-close-modal"])[1]');
    }

}

export default new AustinPage();
