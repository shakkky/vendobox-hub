import React, { useState, useRef } from 'react';
import Section, { SectionContainer } from 'Components/Section';
import { Grid } from '@mui/material';

import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import MachineItem from './Components/MachineItem';

import cloneDeep from 'lodash/cloneDeep';

const MachineWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  color: ${p => p.theme.colors.offBlack};

  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 20px;
  overflow: auto;

  box-shadow: 1px 1px 2px #aaa;
`;

const Shelf = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const MarginTop = styled.div`
  margin-top: 6px;
`;

const Actions = styled.div`
  position: fixed;
  bottom: 30px;
  right: 40px;
  border: 1px solid lightgrey;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 25px;

  background-color: white;
  box-shadow: -4px -4px 100px 10px rgba(0, 0, 0, 0.1);
`;

const RedIcon = styled(IconButton)`
  padding: 6px;
  color: red !important;
`;

const GreenIcon = styled(IconButton)`
  padding: 6px;
  color: green !important;
`;

type Product = {
  id: number;
  title: string;
  label: string;
  image_url: string;
  default_price: number;
  cost: number;
};

type MachinePlanCoil = {
  id?: number;
  coil_no: number;
  product?: Maybe<Product>;
  price?: Maybe<number>;
};

type MachinePlanShelf = {
  id?: number;
  stock_plan_id?: number;
  coils: MachinePlanCoil[];
};

type ReStockPlan = {
  id?: number;
  shelves: MachinePlanShelf[];
};

const Planner = ({
  initial,
  currentPlan,
  inventory,
  onSaveCallback = () => null,
}: {
  initial: ReStockPlan;
  currentPlan: ReStockPlan;
  inventory: Product[];
  onSaveCallback: (plan: ReStockPlan) => void;
}) => {
  const dragItem = useRef<number>();
  const dragOverItem = useRef<{
    shelfNumber?: number | null;
    coilNumber?: number | null;
  }>({
    shelfNumber: null,
    coilNumber: null,
  });

  const [workingPlanogram, setWorkingPlanogram] = useState(initial);

  const [highlightedItem, setHighlightItem] = useState<{
    shelfNumber?: number | null;
    coilNumber?: number | null;
  }>({
    shelfNumber: null,
    coilNumber: null,
  });

  const dragStart = (index: number) => {
    dragItem.current = index;
  };

  const dragEnter = (shelfNumber: number, coilNumber: number) => {
    dragOverItem.current = {
      shelfNumber,
      coilNumber,
    };
    setHighlightItem({
      shelfNumber,
      coilNumber,
    });
  };

  const getFormattedContent = ({
    id,
    coilNumber,
    dragItemContent,
  }: {
    id?: number;
    coilNumber: number;
    dragItemContent: {
      id: number;
      title: string;
      label: string;
      image_url: string;
      default_price: number;
      cost: number;
    };
  }) => {
    return {
      id: id,
      coil_no: coilNumber,
      product: {
        id: dragItemContent.id,
        title: dragItemContent.title,
        label: dragItemContent.label,
        image_url: dragItemContent.image_url,
        default_price: dragItemContent.default_price,
        cost: dragItemContent.cost,
      },
      price: 250,
    };
  };

  const drop = () => {
    if (dragItem.current === undefined) return;

    const { shelfNumber, coilNumber } = dragOverItem.current;
    if (shelfNumber === undefined || coilNumber === undefined) return;
    if (shelfNumber === null || coilNumber === null) return;

    const tempPlanogram = cloneDeep(workingPlanogram);
    const dragItemContent = inventory[dragItem.current];

    const targetShelf = tempPlanogram.shelves[shelfNumber];

    const targetCoil = targetShelf.coils[coilNumber];
    const formattedContent = getFormattedContent({
      id: targetCoil.id,
      coilNumber: targetCoil.coil_no,
      dragItemContent,
    });

    targetShelf.coils.splice(coilNumber, 1);
    targetShelf.coils.splice(coilNumber, 0, formattedContent);

    tempPlanogram.shelves.splice(shelfNumber, 1);
    tempPlanogram.shelves.splice(shelfNumber, 0, targetShelf);

    dragItem.current = undefined;
    dragOverItem.current = {
      shelfNumber: null,
      coilNumber: null,
    };
    setHighlightItem({
      shelfNumber: null,
      coilNumber: null,
    });

    setWorkingPlanogram(tempPlanogram);
  };

  const shouldHighlight = (shelfNumber: number, coilNumber: number) => {
    return (
      highlightedItem.coilNumber === coilNumber &&
      highlightedItem.shelfNumber === shelfNumber
    );
  };

  /**
   * TODO - this needs to become a "restockPlanner" component. You need to pass in an "initial plan", which will either be the machines
   * current plan (machine.re_stock_plan_id), or an exising restock plan (machine.re_stock_plans.[0, 1, 3, etc])
   * this lets us either edit the machine's current plan or a previous plan. When applied, it should reset the machine.re_stock_plan_id to the
   * newly created plan
   */

  return (
    <>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={8}>
          <MachineWrapper>
            {workingPlanogram?.shelves.map((s, shelfIndex) => {
              return (
                <Shelf key={shelfIndex}>
                  {s.coils.map((c, coilIndex) => {
                    return (
                      <div
                        draggable
                        onDragOver={e => {
                          e.preventDefault();
                        }}
                        onDragEnter={() => dragEnter(shelfIndex, coilIndex)}
                        onDragLeave={(e: React.DragEvent<HTMLDivElement>) => {
                          if (e.currentTarget.contains(e.relatedTarget as Node))
                            return;
                          dragOverItem.current = {
                            shelfNumber: null,
                            coilNumber: null,
                          };
                          setHighlightItem({
                            shelfNumber: null,
                            coilNumber: null,
                          });
                        }}
                        onDrop={drop}
                        style={{
                          width: '100%',
                          overflow: 'auto',
                        }}
                        key={coilIndex}
                      >
                        <MachineItem
                          highlight={shouldHighlight(shelfIndex, coilIndex)}
                          coil={c}
                        />
                      </div>
                    );
                  })}
                </Shelf>
              );
            })}
          </MachineWrapper>
        </Grid>

        <Grid item xs={4}>
          <Section border={false} title="Inventory">
            <SectionContainer>
              <MarginTop>
                <Grid container spacing={1} columns={12}>
                  {inventory.map((p, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        key={index}
                        draggable
                        onDragStart={() => dragStart(index)}
                      >
                        <MachineItem
                          image_size={50}
                          coil={{
                            product: p,
                          }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </MarginTop>
            </SectionContainer>
          </Section>
        </Grid>
      </Grid>

      <Actions>
        <RedIcon
          aria-label="clear"
          id="long-button"
          onClick={() => setWorkingPlanogram(initial)}
        >
          <ClearIcon />
        </RedIcon>
        <GreenIcon
          aria-label="done"
          id="long-button"
          onClick={() => onSaveCallback(workingPlanogram)}
        >
          <DoneIcon />
        </GreenIcon>
      </Actions>
    </>
  );
};

export default Planner;
