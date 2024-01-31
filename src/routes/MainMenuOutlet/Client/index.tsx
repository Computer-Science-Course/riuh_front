import BreadCrumbs from "../../../components/BreadCrumbs";
import SearchField from "../../../components/SearchField";
import CRUDListItem from "../../../components/CRUDListItem";
import Button from "../../../components/Button";
import Toast from "../../../components/Toast";
import { useEffect, useState } from "react";
import { ToastMessage } from "../../../components/Toast/ToastProps";
import { scrollBarStyles } from "../../../common/constants";
import { Client as ClientEntity } from "../../../entities/Client";
import { getClients } from "../../../services/client";

const containerStyles = 'w-full h-full flex flex-col p-12 gap-8';
const titleStyles = 'text-4xl font-bold';
const contentStyles = 'flex gap-40 text';
const itemsStyles = 'flex flex-col max-h-96 overflow-y-auto gap-4 p-2 pr-12';
const firstColumnStyles = 'flex flex-col gap-4';

const Client = () => {
  const [clients, setClients] = useState<ClientEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [returnMessage, setReturnMessage] = useState<ToastMessage>({
    message: '', variation: 'standard'
  });

  /** Handler to get and set clients. */
  const handleGetClients = async () => {
    try {
      const clients = await getClients({
        setReturnMessage,
      });
      setClients(clients);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleGetClients();
  }, []);

  return (
    <div className={containerStyles}>
      <h1 className={titleStyles}>Cliente</h1>
      <BreadCrumbs />

      {/* Content area */}
      <section className={contentStyles}>
        <div className={firstColumnStyles}>
          <SearchField
            label="Procure por um freguês"
            placeholder="Digite um nome ou documento"
            required={false}
          />
          <div className={`${itemsStyles} ${scrollBarStyles}`}>
            {clients.map(({ name, registration }) => (
              <CRUDListItem
                title={name!}
                description={registration!}
              />
            ))}
          </div>
        </div>
      </section >
      <Button
        label="Criar novo freguês"
        disabledStatus={isLoading}
        loading={isLoading}
        onClick={() => console.log('Criar novo freguês')}
        fullWidth={false}
      />
      {/* Show toast message on the screen */}
      {
        returnMessage.message && <Toast
          toastMessage={returnMessage}
          messageSetter={setReturnMessage}
        />
      }
    </div >
  );
};

export default Client;
