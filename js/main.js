import { Mod } from "shapez/mods/mod";

import { patchLogicGate } from "./patches/logic_gate";
import { patchWire } from "./patches/wire";
import { patchWireTunnel } from "./patches/wire_tunnel";
import { patchWireSystem } from "./patches/wire_system";
import { patchGameLogic } from "./patches/game_logic";

import { MetaAdderBuilding } from "./buildings/adder";
import { MetaAdvancedProcessorBuilding } from "./buildings/advanced_processor";
import { MetaBundleBuilding } from "./buildings/bundle";
import { MetaDiodeBuilding } from "./buildings/diode";
import { MetaEdgeDetectorBuilding } from "./buildings/edge_detector";
import { MetaMemoryBuilding } from "./buildings/memory";
import { MetaMultiplexerBuilding } from "./buildings/multiplexer";

import { AdderComponent } from "./components/adder";
import { BundleComponent } from "./components/bundle";
import { BundleInterfaceComponent } from "./components/bundle_interface";
import { ColorProcessorComponent } from "./components/color_processor";
import { DiodeComponent } from "./components/diode";
import { EdgeDetectorComponent } from "./components/edge_detector";
import { MemoryComponent } from "./components/memory";
import { MultiplexerComponent } from "./components/multiplexer";
import { SmartProcessorComponent } from "./components/smart_processor";
import { VirtualMixerComponent } from "./components/virtual_mixer";
import { WireInsulatorComponent } from "./components/wire_insulator";

import { AdderSystem } from "./systems/adder";
import { ColorProcessorSystem } from "./systems/color_processor";
import { DiodeSystem } from "./systems/diode";
import { EdgeDetectorSystem } from "./systems/edge_detector";
import { MemorySystem } from "./systems/memory";
import { MultiplexerSystem } from "./systems/multiplexer";
import { SmartProcessorSystem } from "./systems/smart_processor";
import { VirtualMixerSystem } from "./systems/virtual_mixer";

import adderIcon from "../res/sprites/building_icons/adder.png";
import advancedProcessorIcon from "../res/sprites/building_icons/advanced_processor.png";
import diodeIcon from "../res/sprites/building_icons/diode.png";
import edgeDetectorIcon from "../res/sprites/building_icons/edge_detector.png";
import memoryIcon from "../res/sprites/building_icons/memory.png";
import multiplexerIcon from "../res/sprites/building_icons/multiplexer.png";

import META from "../mod.json";
import { HUDBundleInterfaceEdit } from "./hud/bundle_interface_edit";
import { BundleInterfaceSystem } from "./systems/bundle_interface";

class ModImpl extends Mod {
    init() {
        patchLogicGate.call(this);
        patchWire.call(this);
        patchWireTunnel.call(this);
        patchWireSystem.call(this);
        patchGameLogic.call(this);


        this.modInterface.registerComponent(AdderComponent);
        this.modInterface.registerComponent(BundleComponent);
        this.modInterface.registerComponent(BundleInterfaceComponent);
        this.modInterface.registerComponent(ColorProcessorComponent);
        this.modInterface.registerComponent(DiodeComponent);
        this.modInterface.registerComponent(EdgeDetectorComponent);
        this.modInterface.registerComponent(MemoryComponent);
        this.modInterface.registerComponent(MultiplexerComponent);
        this.modInterface.registerComponent(SmartProcessorComponent);
        this.modInterface.registerComponent(VirtualMixerComponent);
        this.modInterface.registerComponent(WireInsulatorComponent);


        this.modInterface.registerNewBuilding({
            metaClass: MetaAdderBuilding,
            buildingIconBase64: adderIcon,
        });
        this.modInterface.registerNewBuilding({
            metaClass: MetaBundleBuilding,
            buildingIconBase64: advancedProcessorIcon,
        });
        this.modInterface.registerNewBuilding({
            metaClass: MetaDiodeBuilding,
            buildingIconBase64: diodeIcon,
        });
        this.modInterface.registerNewBuilding({
            metaClass: MetaEdgeDetectorBuilding,
            buildingIconBase64: edgeDetectorIcon,
        });
        this.modInterface.registerNewBuilding({
            metaClass: MetaMemoryBuilding,
            buildingIconBase64: memoryIcon,
        });
        this.modInterface.registerNewBuilding({
            metaClass: MetaMultiplexerBuilding,
            buildingIconBase64: multiplexerIcon,
        });
        this.modInterface.registerNewBuilding({
            metaClass: MetaAdvancedProcessorBuilding,
            buildingIconBase64: advancedProcessorIcon,
        });

        this.modInterface.addNewBuildingToToolbar({
            toolbar: "wires",
            location: "primary",
            metaClass: MetaAdvancedProcessorBuilding,
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "wires",
            location: "primary",
            metaClass: MetaMultiplexerBuilding,
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "wires",
            location: "primary",
            metaClass: MetaMemoryBuilding,
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "wires",
            location: "primary",
            metaClass: MetaAdderBuilding,
        });
        
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "wires",
            location: "secondary",
            metaClass: MetaDiodeBuilding,
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "wires",
            location: "secondary",
            metaClass: MetaEdgeDetectorBuilding,
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "wires",
            location: "secondary",
            metaClass: MetaBundleBuilding,
        });


        this.modInterface.registerGameSystem({
            id: "adder",
            systemClass: AdderSystem,
            before: "end",
        });
        this.modInterface.registerGameSystem({
            id: "bundleInterface",
            systemClass: BundleInterfaceSystem,
            before: "end",
        });
        this.modInterface.registerGameSystem({
            id: "colorProcessor",
            systemClass: ColorProcessorSystem,
            before: "end",
        })
        this.modInterface.registerGameSystem({
            id: "delay",
            systemClass: DiodeSystem,
            before: "end",
        });
        this.modInterface.registerGameSystem({
            id: "edgeDetector",
            systemClass: EdgeDetectorSystem,
            before: "end",
        });
        this.modInterface.registerGameSystem({
            id: "memory",
            systemClass: MemorySystem,
            before: "end",
        });
        this.modInterface.registerGameSystem({
            id: "multiplexer",
            systemClass: MultiplexerSystem,
            before: "end",
        });
        this.modInterface.registerGameSystem({
            id: "smartProcessor",
            systemClass: SmartProcessorSystem,
            before: "end",
        });
        this.modInterface.registerGameSystem({
            id: "virtualMixer",
            systemClass: VirtualMixerSystem,
            before: "end",
        });

        this.modInterface.registerHudElement("bundleInterfaceEdit", HUDBundleInterfaceEdit);
    }
}
