import { Progress, Grid } from "@nextui-org/react";

export default function IndiceComparacao({ semelhanca }) {
  return (
    <Grid.Container xs={16} sm={2} gap={1}>
      <Grid>
        <Progress color="primary" value={semelhanca} />
      </Grid>
    </Grid.Container>
  );
}