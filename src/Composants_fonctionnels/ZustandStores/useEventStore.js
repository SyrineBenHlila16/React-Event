import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getallEvents } from "../service/Api";


const useEventStore= create(
    persist(
        (set) => ({
            events: [],
            populateEvents: (events) => set({ events }), 
            deleteEventObject: (id)=>
                set((state)=>({
                    events:state.events.filter(event=>event.id!==id)
                })),


           updateEventObject:(id,updatedEvent)=>              
                set((state)=>({
                    events:state.events.map(event=>event.id===id?updatedEvent:event)
                })),


            addEventObject:(newEvent)=>                
                set((state)=>({
                    //...state //pour garder les autres propriétés du state inchangées
                    events:[...state.events,newEvent]
                })),

                fetchEvents:async()=>{
                    try{
                        const response=await getallEvents();
                        set({events:response.data,errors:null});
                    }catch(error){
                        set({error:error.message});
                    }
                },
        }),
        {
            name: "event-storage",
            getStorage: () => localStorage,
        }
    )
);
export default useEventStore;