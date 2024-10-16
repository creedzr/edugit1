const URL = 'http://zero.webappsecurity.com';
const Search ='#searchTerm';

class SearchPage {
    static visit() {
        cy.visit(URL);
    }

    static Search() {
        cy.get(Search).type('online {enter}');
    }
}
export default SearchPage;