import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class GammaDistribution(DistributionTemplate):
    def __init__(self):
        super(GammaDistribution, self).__init__('Гамма распределение')

    def calculate(self, data: pd.Series) -> None:
        a = 1.99
        self.distribution = np.linspace(stats.gamma.ppf(0.01, a) * data.min(), stats.gamma.ppf(0.99, a) * data.max(), len(data))
        self.__mse__(data)