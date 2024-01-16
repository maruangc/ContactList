const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactUrl: "https://playground.4geeks.com/apis/fake/contact/",
      agendaUrl:
        "https://playground.4geeks.com/apis/fake/contact/agenda/maruanGC",
      contactList: [],
    },
    actions: {
      getContactList: async () => {
        const store = getStore();
        const response = await fetch(store.agendaUrl);
        const data = await response.json();
        setStore({ contactList: data });
        console.log("Lista encontada", store.contactList);
      },
      addContact: async (item) => {
        const store = getStore();
        const actions = getActions();
        const response = await fetch(store.contactUrl, {
          method: "POST",
          body: JSON.stringify(item),
          headers: { "content-type": "application/json" },
        });
        console.log("Add Contact ", response);
        actions.getContactList();
      },
      createAgenda: async () => {
        const store = getStore();
        const actions = getActions();
        const response = await fetch(store.contactUrl, {
          method: "POST",
          body: JSON.stringify({
            full_name: "Nombre Inicial",
            email: "nombre@correo.com",
            agenda_slug: "maruanGC",
            address: "Algun lugar",
            phone: "7864445566",
          }),
          headers: { "content-type": "application/json" },
        });
        actions.getContactList();
        console.log("Create Agenda", response);
      },
      updateContact: async (item) => {
        console.log("Before Update (item): ", item);
        const store = getStore();
        const actions = getActions();
        const response = await fetch(`${store.contactUrl}${item.id}`, {
          method: "PUT",
          body: JSON.stringify(item),
          headers: { "content-type": "application/json" },
        });
        console.log("Update Contact", response);
        actions.getContactList();
      },
      deleteAgenda: async () => {
        const store = getStore();
        const actions = getActions();
        const response = await fetch(store.agendaUrl, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        });
        actions.getContactList();
        console.log("Create Agenda", response);
      },
      deleteContact: async (id) => {
        const store = getStore();
        const actions = getActions();
        const response = await fetch(store.contactUrl + id.toString(), {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        });
        actions.getContactList();
        console.log("Contact Deleted ID: ", id);
      },
    },
  };
};

export default getState;
