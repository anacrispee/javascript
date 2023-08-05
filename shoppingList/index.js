document.addEventListener('DOMContentLoaded', () => {

    class shoppingList {
        constructor() {
            this.inputNewItem = document.getElementById('inputNewItem');
            this.addItemBtn = document.getElementById('addItemBtn');
            this.ul = document.querySelector('ul');
            this.modalEditaItem = document.getElementById('modalBackdrop');
            this.nomeItemInput = document.getElementById('nomeItemInput');
            this.confirmaEditaBtn = document.getElementById('confirmaEditaBtn');
            this.cancelaEdit = document.getElementById('cancelaEdit');

            this.addItemBtn.addEventListener('click', () => {
                this.addItem();
            })
        }

        addItem(){
            if (this.inputNewItem.value === '') {
                alert('Campo vazio: insira o nome do item!');
            } else {
                const div = document.createElement('div');

                let item = document.createElement('li');
                item.textContent = this.inputNewItem.value;
                this.inputNewItem.value = '';

                const deleteItemBtn = document.createElement('button');
                deleteItemBtn.id = 'deleteItemBtn';
                deleteItemBtn.textContent = 'deletar';

                const editItemBtn = document.createElement('button');
                editItemBtn.id = 'deleteItemBtn';
                editItemBtn.textContent = 'editar';
                
                this.ul.appendChild(div);
                div.appendChild(item);
                div.appendChild(deleteItemBtn);
                div.appendChild(editItemBtn);

                deleteItemBtn.addEventListener('click', () => {
                    this.deletaItem(item, deleteItemBtn, editItemBtn);
                });

                editItemBtn.addEventListener('click', () => {
                    this.modalEditaItem.classList.toggle('show');
                    this.editaItem(item);
                })
            };
        };

        deletaItem(item, deleteItemBtn, editItemBtn){
            item.remove();
            deleteItemBtn.remove();
            editItemBtn.remove();
        };

        editaItem(item) {
            this.cancelaEdit.addEventListener('click', () => {
                this.modalEditaItem.classList.remove('show');
            });

            this.nomeItemInput.value = item.textContent;
            this.confirmaEditaBtn.addEventListener('click', () => {
                let valueEdita = this.nomeItemInput.value;
                if (valueEdita === ''){
                    alert('Campo vazio: insira o nome do item!');
                }else{
                    item.textContent = valueEdita;
                    this.modalEditaItem.classList.remove('show');
                }
            })
        };
    };

    new shoppingList();
});

