class Japa {
    constructor() {
    
    }


    openDropdowns() {
        const dropdownToggles = document.querySelectorAll('.wj-dropdown__toggle');
        // console.log(dropdownToggles);    

        for (const toggle of dropdownToggles) {
            toggle.addEventListener('click', e => {
                let target = e.currentTarget.dataset.dropdown;

                let dropdown = document.getElementById(`dropdown-${target}`);
                // console.log(dropdown);

                dropdown.classList.toggle('wj-dropdown--active');

                e.stopPropagation();
            });

        }

    }

    closeDropdowns(params) {
        document.addEventListener('click', e => {
            if (e.target.classList !== 'undefined' && !e.target.classList.contains(
                    'wj-dropdown') &&
                !this.isDescendant('wj-dropdown', e.target) && !this.isDescendant('wj-dropdown__toggle', e
                    .target)
            ) {
                const dropdowns = document.querySelectorAll('.wj-dropdown');
                for (const dropdown of dropdowns) {
                    dropdown.classList.remove('wj-dropdown--active');
                }
            }
        });
    }


    isDescendant(parent, child) {
        var parent = document.querySelector(`.${parent}`);
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    watchSearch() {
        const searchInput = document.querySelector('.wj-search__input');

        if (searchInput !== null) {
            searchInput.addEventListener('focus', e => {
                searchInput.closest('.wj-search').classList.add('active');
            });

            searchInput.addEventListener('blur', e => {
                searchInput.closest('.wj-search').classList.remove('active');
            });
        }
    }

    watchMobileNav() {
        const checkbox = document.getElementById('wj-mobile-nav__checkbox');

        if(checkbox){

            document.addEventListener('click', e => {
                if (e.target.classList !== undefined && !e.target.classList.contains('wj-dashboard__nav') && !this.isDescendant('wj-dashboard__header', e.target)) {
                    checkbox.checked = false;
                }
            });
    
            document.querySelectorAll('.wj-dashboard__nav-item').forEach(el => {
                el.addEventListener('click', e => {
                    checkbox.checked = false;
                });
            });
        }

    }

}

export default Japa;