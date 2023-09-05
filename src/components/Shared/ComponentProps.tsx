import { H2 } from "@/components/MDX/H2";
import { ReactNode } from "react";

interface Props {
  docgen: any;
}

const PropData = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex gap-xl">
      <p className="font-bold">{title}</p>
      <p>{children}</p>
    </div>
  );
};

export const ComponentProps = ({ docgen }) => {
  const componentsDocgen = Object.entries(docgen) as [string, any][];

  return (
    <div>
      {componentsDocgen.map(([name, data]) => {
        return (
          <div key={name}>
            <H2>{name}</H2>
            <p>{data.description || "MISSING_COMPONENT_DESC"}</p>

            <div>
              {Object.entries(data.props).map((prop) => {
                const [propName, propData] = prop as any;

                return (
                  <div key={propName} className="px-lg py-md rounded-md my-lg">
                    <p className="font-bold border-b-sm border-outline mb-lg">
                      {propName}
                      {propData.required ? "*" : ""}
                    </p>

                    <div className="flex flex-col gap-md pl-lg">
                      <PropData title="Description">
                        {propData.description || "missing_prop_desc"}
                      </PropData>

                      <div className="flex gap-xl">
                        <p className="font-bold">Type</p>
                        <p className="text-info">
                          {JSON.stringify(propData.type)}
                        </p>
                      </div>

                      <div className="flex gap-xl">
                        <p className="font-bold">Default</p>
                        <p className="text-info">
                          {propData.defaultValue?.value ||
                            JSON.stringify(propData.defaultValue)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <p>{JSON.stringify(data)}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
