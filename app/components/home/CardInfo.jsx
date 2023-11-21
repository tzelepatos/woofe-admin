import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function CardInfo({
  title,
  count,
  subCount1,
  subCount1Text,
  subCount2,
  subCount2Text,
  subCount3,
  subCount3Text,
  subCount4,
  subCount4Text,
  percentageCreatedLastMonth,
  iconName,
  children,
}) {
  const Icon = Icons[iconName];
  return (
    <Card className="bg-jimGray hover:border-jimGrayLight hover:shadow-lg w-full flex-col flex  ">
      <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold ">{title}</CardTitle>
        {Icon && <Icon className="w-6 text-bold " />}
      </CardHeader>
      <CardContent className="   flex flex-col h-full">
        {/* first */}
        <div className=" h-full ">
          <div className="text-2xl font-bold text-jimOrange  ">{count}</div>
          <p className="text-xs text-muted-foreground ">
            {subCount1} {subCount1Text}
          </p>
          <p className="text-xs text-muted-foreground">
            {subCount2}
            {subCount2Text}
          </p>
          <p className="text-xs text-muted-foreground">
            {subCount3}
            {subCount3Text}
          </p>
          <p className="text-xs text-muted-foreground">
            {subCount4}
            {subCount4Text}
          </p>
        </div>
        {/* second */}
        <div className="flex items-center gap-2 pt-2 ">
          <span
            className={
              percentageCreatedLastMonth >= 0
                ? "text-green-500 font-semibold"
                : "text-red-500 font-semibold"
            }
          >
            {percentageCreatedLastMonth + "%"}
          </span>
          <p className="text-xs text-muted-foreground ">
            more than previous month
          </p>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
