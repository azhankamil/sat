export default function Cards() {
  const batt = () => 80 + Math.floor(Math.random() * 20);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg m-4">
      <div className="px-1 py-2 sm:px-6">
        <h3 className="text-sm font-medium leading-6 text-gray-900">
          Temperature Sensors
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <img
              className="block h-5 w-auto lg:block"
              src="battery.png"
              alt="Your Company"
            />
            <dt className="text-sm font-medium text-gray-500 ">Battery 1</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
              20℃
            </dd>
          </div>
          <div className="bg-gray-50 px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <img
              className="block h-5 w-auto lg:block"
              src="battery.png"
              alt="Your Company"
            />
            <dt className="text-sm font-medium text-gray-500">Battery 2</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
              30℃
            </dd>
          </div>

          <div className="bg-gray-50 px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Payload</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              23℃
            </dd>
          </div>
          <div className="bg-gray-50 px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Ambient</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              30℃
            </dd>
          </div>
          <div className="bg-gray-50 px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Insight</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              28℃
            </dd>
          </div>
          <div className="bg-white px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Battery 1 Heater
            </dt>
            <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>OFF</div>
                <div className="h-4 w-4 border-2"></div>
                <div>ON</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
          <div className="bg-white px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Battery 2 Heater
            </dt>
            <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>OFF</div>
                <div className="h-4 w-4 border-2"></div>
                <div>ON</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
          <div className="bg-white px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Battery 2 Heater
            </dt>
            <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div class="grid grid-rows-2 grid-flow-col gap-2 justify-end">
                <div>OFF</div>
                <div className="h-4 w-4 border-2"></div>
                <div>ON</div>
                <div className="h-4 w-4 border-2 bg-green-800"></div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
