export default function Cards() {
  const batt = () => 120 + Math.floor(Math.random() * 20);
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg m-4">
      <div className="px-1 py-2 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900"></h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-6">
            <div className="text-xs font-medium text-gray-500">Battery 1</div>
            <div className="mt-1 w-full text-xs text-gray-900 sm:col-span-0 sm:mt-0">
              <div class=" bg-black-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
                <div
                  class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                  style={{ width: batt() }}
                ></div>
              </div>
              <div className=" flex justify-between flex-row">
                <div className="text-xs font-small justify-self-end">3.2V</div>
                <div className="text-xs font-small ">4.5V</div>
              </div>
            </div>
            <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>Not Active</div>
                <div className="h-4 w-4 border-2"></div>
                <div>Active</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
          <div className="bg-white px-1 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-6">
            <div className="text-xs font-medium text-gray-500">Battery 2</div>
            <div className="mt-1 w-full text-xs text-gray-900 sm:col-span-0 sm:mt-0">
              <div class=" bg-black-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
                <div
                  class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                  style={{ width: 0 }}
                ></div>
              </div>
              <div className=" flex justify-between flex-row">
                <div className="text-xs font-small justify-self-end">3.2V</div>
                <div className="text-xs font-small ">4.5V</div>
              </div>
            </div>
            <div className="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>Not Active</div>
                <div className="h-4 w-4 border-2 bg-red-800"></div>
                <div>Active</div>
                <div className="h-4 w-4 border-2"></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-6">
            <div className="text-xs font-medium text-gray-500">
              ADCS Positioning
            </div>
            <dd>27.8974° N, 78.0880° E</dd>
          </div>
          <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-6">
            <div className="text-xs font-medium text-gray-500">Velocity</div>
            <dd>7.806 Kmps</dd>
          </div>
          <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-6">
            <div className="text-xs font-medium text-gray-500">
              upLink Frequency
            </div>
            <dd>1265 MHz</dd>
          </div>
          <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-6">
            <div className="text-xs font-medium text-gray-500">
              downLink Frequency
            </div>
            <dd>2650 MHz</dd>
          </div>
          <div className="bg-gray-50 px-1 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-6">
            <div className="text-xs font-medium text-gray-500">
              Beacon Frequency
            </div>
            <dd>145 MHz</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
